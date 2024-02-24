"use client"

import Image from "next/image"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

function CompanyInfo() {
  const [selectedBtnValue, setSelectedBtnValue] = useState("1-10")
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "Sixteen Inc.",
      website: "https://sixteen.life",
      linkedin: "https://www.linkedin.com/company/sixteenlife",
      industry: "Digital Wellbeing",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    console.log(formData)
  }

  const handleRadioEvent = (value: any) => {
    setSelectedBtnValue(value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 p-5">
      {/* THE INTRO LINE - Logo and buttons */}
      <div className="intro-line flex justify-between mb-12">
        {/* The Logo part in the LEFT SIDE */}
        <div className="logo-div flex gap-[1.875rem]">
          <div>
            <Image
              src={"/SVGs/placeholder-comp-logo.svg"}
              width={108}
              height={108}
              alt="Placeholder company logo"
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <span className="flex gap-3">
              <Button type="button" variant="destructive" size="sm">
                Remove
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="shadow-sm"
              >
                Change Photo
              </Button>
            </span>
            <span className="text-[#17171F66] text-sm whitespace-nowrap">
              or drag and drop (SVG, PNG, JPG)
            </span>
          </div>
        </div>

        {/* The Saving option in the RIGHT SIDE */}
        <div className="buttons-div flex gap-3">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Save changes</Button>
        </div>
      </div>

      {/* COMPANY INFO */}
      <div className="comp-info grid grid-cols-[repeat(2,1fr)] gap-x-10 gap-y-6 text-sm mb-10">
        <label className="text-[#17171FCC]">
          Company's Name
          <Input {...register("name")} className="mt-2" />
        </label>

        <label className="text-[#17171FCC]">
          Company's Website
          <Input {...register("website")} className="mt-2" />
        </label>

        <label className="text-[#17171FCC]">
          Company's Website
          <Input {...register("linkedin")} className="mt-2" />
        </label>

        <label className="text-[#17171FCC]">
          Company's Industry
          <Input {...register("industry")} className="mt-2" />
        </label>
      </div>

      {/* EMPLOYEE COUNT */}
      <div className="employee-count">
        <h1 className="text-[##17171F] mb-4">Employee Count</h1>
        <RadioGroup
          defaultValue="1-10"
          onValueChange={handleRadioEvent}
          className="flex"
        >
          <div className="relative h-[38px]">
            <RadioGroupItem
              value="1-10"
              id="option-one"
              className="w-full h-full rounded-[100px] border-none"
            />
            <Label
              htmlFor="option-one"
              className={twMerge(
                "radio-label",
                selectedBtnValue === "1-10" ? "bg-black text-white" : ""
              )}
            >
              1-10
            </Label>
          </div>
          <div className="relative h-[38px]">
            <RadioGroupItem
              value="10-100"
              id="option-two"
              className="w-full h-full rounded-[100px] border-none"
            />
            <Label
              htmlFor="option-two"
              className={twMerge(
                "radio-label",
                selectedBtnValue === "10-100" ? "bg-black text-white" : ""
              )}
            >
              10-100
            </Label>
          </div>
          <div className="relative h-[38px]">
            <RadioGroupItem
              value="100-500"
              id="option-three"
              className="w-full h-full rounded-[100px] border-none"
            />
            <Label
              htmlFor="option-three"
              className={twMerge(
                "radio-label",
                selectedBtnValue === "100-500" ? "bg-black text-white" : ""
              )}
            >
              100-500
            </Label>
          </div>
          <div className="relative h-[38px]">
            <RadioGroupItem
              value="1000+"
              id="option-four"
              className="w-full h-full rounded-[100px] border-none"
            />
            <Label
              htmlFor="option-four"
              className={twMerge(
                "radio-label",
                selectedBtnValue === "1000+" ? "bg-black text-white" : ""
              )}
            >
              1000+
            </Label>
          </div>
        </RadioGroup>
      </div>
    </form>
  )
}

export default CompanyInfo
