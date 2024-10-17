"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast, Toaster } from "sonner";
import { db, storage } from "../../lib/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function JobApplicationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [otherRole, setOtherRole] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleRoleChange = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const resumeFile = data.resume[0];
      const resumeRef = ref(
        storage,
        `resumes/${Date.now()}_${resumeFile.name}`
      );
      await uploadBytes(resumeRef, resumeFile);
      const resumeURL = await getDownloadURL(resumeRef);

      const roles = [...selectedRoles];
      if (otherRole.trim()) roles.push(otherRole.trim());

      if (roles.length === 0) {
        toast.error("Select at least one role.");
        setSubmitting(false);
        return;
      }

      const cleanedData = {
        name: data.name,
        collegeEmail: data.collegeEmail,
        applyFor: roles,
        contactNumber: data.contactNumber,
        currentYear: data.currentYear,
        currentSemester: data.currentSemester,
        linkedinUrl: data.linkedinUrl,
        resumeURL,
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, "interns"), cleanedData);
      toast.success("Application submitted successfully!");
      reset();
      setSelectedRoles([]);
      setOtherRole("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0D0D0D] text-white p-6">
      <Toaster position="top-right" />
      <div className="max-w-3xl w-full bg-[#1C1C1C] p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Job Application
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col space-y-1">
            <label className="font-semibold">Name</label>
            <Input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-semibold">College Email</label>
            <Input
              type="email"
              placeholder="yourname@paruluniversity.ac.in"
              {...register("collegeEmail", {
                required: "College email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@paruluniversity.ac.in$/,
                  message: "Use a valid @paruluniversity.ac.in email",
                },
              })}
              className="bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
            />
            {errors.collegeEmail && (
              <p className="text-red-500">{errors.collegeEmail.message}</p>
            )}
          </div>

          <div>
            <label className="font-semibold block mb-2">Apply For</label>
            <div className="flex flex-col gap-4">
              {[
                "Figma Designer",
                "Frontend Developer",
                "Backend Developer",
                "App Developer",
              ].map((role) => (
                <label key={role} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    onChange={() => handleRoleChange(role)}
                    checked={selectedRoles.includes(role)}
                    className="h-5 w-5"
                  />
                  <span>{role}</span>
                </label>
              ))}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={() => handleRoleChange("Other")}
                  checked={selectedRoles.includes("Other")}
                  className="h-5 w-5"
                />
                <Input
                  type="text"
                  placeholder="Specify other role"
                  value={otherRole}
                  onChange={(e) => setOtherRole(e.target.value)}
                  className="bg-[#333] border border-gray-600 rounded-lg p-2 text-white"
                />
              </label>
            </div>
            {selectedRoles.length === 0 && (
              <p className="text-red-500">Select at least one role.</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col space-y-1">
              <label className="font-semibold">Current Year</label>
              <Input
                type="number"
                placeholder="Enter your current year"
                {...register("currentYear", {
                  required: "Current year is required",
                })}
                className="bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
              />
              {errors.currentYear && (
                <p className="text-red-500">{errors.currentYear.message}</p>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <label className="font-semibold">Current Semester</label>
              <Input
                type="number"
                placeholder="Enter your current semester"
                {...register("currentSemester", {
                  required: "Current semester is required",
                })}
                className="bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
              />
              {errors.currentSemester && (
                <p className="text-red-500">{errors.currentSemester.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-semibold">Contact Number</label>
            <Input
              type="tel"
              placeholder="Your contact number"
              {...register("contactNumber", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Must be a 10-digit number",
                },
              })}
              className="bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
            />
            {errors.contactNumber && (
              <p className="text-red-500">{errors.contactNumber.message}</p>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-semibold">LinkedIn URL</label>
            <Input
              type="url"
              placeholder="Your LinkedIn profile URL"
              {...register("linkedinUrl", {
                required: "LinkedIn URL is required",
              })}
              className="bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
            />
            {errors.linkedinUrl && (
              <p className="text-red-500">{errors.linkedinUrl.message}</p>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label className="font-semibold">Upload Resume</label>
            <Input
              type="file"
              {...register("resume", { required: "Resume is required" })}
              className="bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
            />
            {errors.resume && (
              <p className="text-red-500">{errors.resume.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className={`w-full py-3 rounded-lg shadow-md transition ${
              submitting
                ? "bg-blue-500 opacity-75 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </div>
    </div>
  );
}
