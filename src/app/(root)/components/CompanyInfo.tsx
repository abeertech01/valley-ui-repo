"use client"

import Image from "next/image"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function CompanyInfo() {
  const [selectedBtnValue, setSelectedBtnValue] = useState("1-10")
  const [selectedFundingRound, setSelectedFundingRound] = useState("seed")
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "Sixteen Inc.",
      website: "https://sixteen.life",
      linkedin: "https://www.linkedin.com/company/sixteenlife",
      industry: "Digital Wellbeing",
      compDesig: "Redesign your digital life, reduce your screen time",
      compGoals:
        "Help everyone to be more conscious of where they are spending their time",
      headQ: "Delhi, India",
      fundingRound: "seed",
      faqs: "https://sixteen.life/faq",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    formData.empCount = selectedBtnValue
    formData.fundingRound = selectedFundingRound
    console.log(formData)
  }

  const handleRadioEvent = (value: any) => {
    setSelectedBtnValue(value)
  }

  const selectFundingRound = (value: any) => {
    setSelectedFundingRound(value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 lg:p-5">
      {/* THE INTRO LINE - Logo and buttons */}
      <div className="intro-line flex flex-col gap-[1.875rem] lg:gap-auto lg:flex-row justify-between mb-12">
        {/* The Logo part in the LEFT SIDE */}
        <div className="logo-div flex gap-[1.875rem] order-2 lg:order-1">
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
        <div className="buttons-div w-full lg:w-auto flex gap-3 order-1 lg:order-2">
          <Button
            type="button"
            variant="outline"
            className="flex-1 lg:flex-auto"
          >
            Cancel
          </Button>
          <Button type="submit" className="flex-1 lg:flex-auto">
            Save changes
          </Button>
        </div>
      </div>

      {/* COMPANY INFO */}
      <div className="comp-info flex flex-col gap-7 lg:grid lg:grid-cols-[repeat(2,1fr)] lg:gap-x-10 lg:gap-y-6 text-sm mb-10">
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
      <div className="employee-count mb-10 text-sm">
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

      {/* COMPANY DESIGNATION */}
      <div className="comp-designation text-sm mb-10">
        <h1 className="text-[##17171F] mb-2">Company description</h1>
        <Input {...register("compDesig")} className="mb-2" />
        <p className="text-[#17171F99]">Your detailed company description</p>
      </div>

      {/* COMPANY GOALS */}
      <div className="comp-goals text-sm mb-10">
        <h1 className="text-[##17171F] mb-2">What are your company goals?</h1>
        <Input {...register("compGoals")} className="" />
      </div>

      {/* HEADQUARTERS */}
      <div className="head-q text-sm mb-10">
        <h1 className="text-[##17171F] mb-2">Headquarters</h1>
        <Input {...register("headQ")} className="" />
      </div>

      {/* FUNDING ROUND AND FAQs */}
      <div className="comp-info flex flex-col gap-7 lg:grid lg:grid-cols-[repeat(2,1fr)] lg:gap-x-10 lg:gap-y-6 text-sm mb-10">
        <label className="text-[#17171FCC]">
          Funding Rounds
          <Select defaultValue="seed" onValueChange={selectFundingRound}>
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="seed">Seed</SelectItem>
              <SelectItem value="seriesa">Series A</SelectItem>
              <SelectItem value="seriesb">Series B</SelectItem>
            </SelectContent>
          </Select>
        </label>

        <label className="text-[#17171FCC]">
          FAQs
          <Input {...register("faqs")} className="mt-2" />
        </label>
      </div>
    </form>
  )
}

export default CompanyInfo
