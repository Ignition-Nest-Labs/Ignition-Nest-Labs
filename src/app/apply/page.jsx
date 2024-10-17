"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast, Toaster } from "sonner";
import { db, storage } from "../../lib/firebase.config"; // Firebase imports
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
  const [otherRole, setOtherRole] = useState(""); // Track custom role input

  // Utility to filter out undefined or empty values
  const removeUndefinedFields = (obj) =>
    Object.fromEntries(
      Object.entries(obj).filter(
        ([_, value]) => value !== undefined && value !== ""
      )
    );

  const onSubmit = async (data) => {
    setSubmitting(true);

    try {
      // Handle resume file upload to Firebase Storage
      const resumeFile = data.resume[0]; // Get the uploaded file

      // Create a unique path for the resume file
      const resumeRef = ref(
        storage,
        `resumes/${Date.now()}_${resumeFile.name}`
      );

      // Upload the file to Firebase Storage
      await uploadBytes(resumeRef, resumeFile);

      // Get the download URL of the uploaded file
      const resumeURL = await getDownloadURL(resumeRef);

      // Clean and prepare the data for Firestore
      const roles = data.applyFor || [];
      if (otherRole) roles.push(otherRole);

      const cleanedData = removeUndefinedFields({
        name: data.name,
        collegeEmail: data.collegeEmail,
        department: data.department,
        institute: data.institute,
        applyFor: roles,
        contactNumber: data.contactNumber,
        currentYear: data.currentYear,
        currentSemester: data.currentSemester,
        linkedinUrl: data.linkedinUrl,
        resumeURL, // Add resume URL to Firestore data
        createdAt: new Date().toISOString(), // Timestamp
      });

      console.log("Cleaned data:", cleanedData);
      // Store the cleaned data in Firestore
      await addDoc(collection(db, "interns"), cleanedData);

      // Show success toast and reset form
      toast.success("Application submitted successfully!");
      // reset(); // Reset the form
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0D0D0D] text-white">
      <Toaster position="top-right" />
      <div className="max-w-2xl w-full p-8 my-20 bg-[#1C1C1C] shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Job Application</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block font-medium">Name</label>
            <Input
              type="text"
              placeholder="Your name"
              className="w-full mt-2 bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* College Email */}
          <div>
            <label className="block font-medium">College Email</label>
            <Input
              type="email"
              placeholder="Your college email"
              className="w-full mt-2 bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
              {...register("collegeEmail", {
                required: "College email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@paruluniversity.ac.in$/,
                  message: "Only @paruluniversity.ac.in emails are allowed",
                },
              })}
            />
            {errors.collegeEmail && (
              <p className="text-red-500 text-sm">
                {errors.collegeEmail.message}
              </p>
            )}
          </div>

          {/* Apply For */}
          <div>
            <label className="block font-medium">Apply For</label>
            <div className="space-y-2 mt-2">
              {[
                "Figma Designer",
                "Frontend Developer",
                "Backend Developer",
                "App Developer",
              ].map((role) => (
                <label key={role} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value={role}
                    {...register("applyFor")}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span>{role}</span>
                </label>
              ))}

              {/* Other Role */}
              <label className="flex items-center space-x-3 mt-2">
                <input
                  type="checkbox"
                  value="Other"
                  {...register("applyFor")}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <Input
                  type="text"
                  placeholder="Other role (specify)"
                  value={otherRole}
                  onChange={(e) => setOtherRole(e.target.value)}
                  className="w-full bg-[#333] border border-gray-600 rounded-lg p-2 text-white"
                />
              </label>
            </div>
          </div>

          {/* Contact Number */}
          <div>
            <label className="block font-medium">Contact Number</label>
            <Input
              type="tel"
              placeholder="Your contact number"
              className="w-full mt-2 bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
              {...register("contactNumber", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Contact number must be 10 digits",
                },
              })}
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">
                {errors.contactNumber.message}
              </p>
            )}
          </div>

          {/* Current Year and Semester */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Current Year</label>
              <Input
                type="number"
                placeholder="Year"
                className="w-full mt-2 bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
                {...register("currentYear", {
                  required: "Current year is required",
                })}
              />
              {errors.currentYear && (
                <p className="text-red-500 text-sm">
                  {errors.currentYear.message}
                </p>
              )}
            </div>
            <div>
              <label className="block font-medium">Current Semester</label>
              <Input
                type="number"
                placeholder="Semester"
                className="w-full mt-2 bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
                {...register("currentSemester", {
                  required: "Current semester is required",
                })}
              />
              {errors.currentSemester && (
                <p className="text-red-500 text-sm">
                  {errors.currentSemester.message}
                </p>
              )}
            </div>
          </div>

          {/* LinkedIn URL */}
          <div>
            <label className="block font-medium">LinkedIn URL</label>
            <Input
              type="url"
              placeholder="Your LinkedIn profile URL"
              className="w-full mt-2 bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
              {...register("linkedinUrl", {
                required: "LinkedIn URL is required",
              })}
            />
            {errors.linkedinUrl && (
              <p className="text-red-500 text-sm">
                {errors.linkedinUrl.message}
              </p>
            )}
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block font-medium">Upload Resume</label>
            <Input
              type="file"
              className="w-full mt-2 bg-[#333] border border-gray-600 rounded-lg p-3 text-white"
              {...register("resume", { required: "Resume is required" })}
            />
            {errors.resume && (
              <p className="text-red-500 text-sm">{errors.resume.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 mt-6 rounded-lg shadow-md hover:bg-blue-700"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </div>
    </div>
  );
}
