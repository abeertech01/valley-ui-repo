import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CompanyInfo from "./components/CompanyInfo"

export default function Home() {
  return (
    <main className="max-w-[1204px] mx-auto">
      <h1 className="text-4xl font-semibold leading-none mb-8">Settings</h1>
      <Tabs defaultValue="info" className="w-full">
        <TabsList>
          <TabsTrigger value="profile">Your Profile</TabsTrigger>
          <TabsTrigger value="info">Company Info</TabsTrigger>
          <TabsTrigger value="manageSeats">Manage Seats</TabsTrigger>
          <TabsTrigger value="dontContact">Do not Contact</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          Make changes to your profile here.
        </TabsContent>
        <TabsContent value="info">
          <CompanyInfo />
        </TabsContent>
        <TabsContent value="manageSeats">Manage Seats here</TabsContent>
        <TabsContent value="dontContact">Do not Contact here</TabsContent>
        <TabsContent value="integrations">Integrations here</TabsContent>
      </Tabs>
    </main>
  )
}
