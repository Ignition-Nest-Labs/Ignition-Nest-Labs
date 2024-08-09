"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast, Toaster } from "sonner";
import { db } from "../../lib/firebase.config";
import { collection, doc, setDoc } from "firebase/firestore";

export default function JobApplicationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      // Store form data in Firestore under interns/interview
      const docRef = doc(collection(db, "interns"), "interview");
      await setDoc(docRef, {
        name: data.name,
        collegeEmail: data.collegeEmail,
        department: data.department,
        institute: data.institute,
        applyFor: data.applyFor,
        contactNumber: data.contactNumber,
        currentYear: data.currentYear,
        currentSemester: data.currentSemester,
        linkedinUrl: data.linkedinUrl,
        // Add more fields as needed
      });

      // Show success message
      toast.success("Application submitted successfully!");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#020202] text-white">
      <Toaster position="top-right" />
      <div className="max-w-2xl w-full p-8 my-20 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">
          Job Application
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Form fields with validation */}
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <Input
              type="text"
              placeholder="Your name"
              className="w-full p-2 mt-2 border border-gray-600 rounded-lg bg-gray-100 text-black"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              College Email
            </label>
            <Input
              type="email"
              placeholder="Your college email"
              className="w-full p-2 mt-2 border border-gray-600 rounded-lg bg-gray-100 text-black"
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
          <div>
            <label className="block font-medium text-gray-700">
              Department
            </label>
            <Input
              type="text"
              placeholder="Your department"
              className="w-full p-2 mt-2 border border-gray-600 rounded-lg bg-gray-100 text-black"
              {...register("department", {
                required: "Department is required",
              })}
            />
            {errors.department && (
              <p className="text-red-500 text-sm">
                {errors.department.message}
              </p>
            )}
          </div>
          <div>
            <label className="block font-medium text-gray-700">Institute</label>
            <Input
              type="text"
              placeholder="Your institute"
              className="w-full p-2 mt-2 border border-gray-600 rounded-lg bg-gray-100 text-black"
              {...register("institute", { required: "Institute is required" })}
            />
            {errors.institute && (
              <p className="text-red-500 text-sm">{errors.institute.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium text-gray-700">Apply For</label>
            <div className="space-y-2 mt-2">
              <label className="flex items-center space-x-3">
                <Checkbox
                  {...register("applyFor")}
                  value="Figma Designer"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">Figma Designer</span>
              </label>
              <label className="flex items-center space-x-3">
                <Checkbox
                  {...register("applyFor")}
                  value="Frontend Developer"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">
                  Frontend Developer (Next.js, React.js)
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <Checkbox
                  {...register("applyFor")}
                  value="Backend Developer"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">
                  Backend Developer (Node, Django)
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <Checkbox
                  {...register("applyFor")}
                  value="App Developer"
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">
                  App Developer (Flutter, React Native)
                </span>
              </label>
            </div>
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              Contact Number
            </label>
            <Input
              type="tel"
              placeholder="Your contact number"
              className="w-full p-2 mt-2 border border-gray-600 rounded-lg bg-gray-100 text-black"
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
          <div>
            <label className="block font-medium text-gray-700">
              Current Year
            </label>
            <Input
              type="number"
              placeholder="Your current year"
              className="w-full p-2 mt-2 border border-gray-600 rounded-lg bg-gray-100 text-black"
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
            <label className="block font-medium text-gray-700">
              Current Semester
            </label>
            <Input
              type="number"
              placeholder="Your current semester"
              className="w-full p-2 mt-2 border border-gray-600 rounded-lg bg-gray-100 text-black"
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
          <div>
            <label className="block font-medium text-gray-700">Resume</label>
            <Input
              type="file"
              className="w-full p-2 mt-2 border border-gray-600 rounded-lg bg-gray-100 text-black"
              {...register("resume", { required: "Resume is required" })}
            />
            {errors.resume && (
              <p className="text-red-500 text-sm">{errors.resume.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              LinkedIn URL
            </label>
            <Input
              type="url"
              placeholder="Your LinkedIn profile URL"
              className="w-full p-2 mt-2 border border-gray-600 rounded-lg bg-gray-100 text-black"
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
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg shadow-md hover:bg-blue-700"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </div>
    </div>
  );
}
