import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CompanyInfo from "./components/CompanyInfo"

export default function Home() {
  return (
    <main className="lg:max-w-[1204px] lg:mx-auto mx-6">
      <h1 className="max-w-[342px] mx-auto lg:max-w-full lg:text-4xl text-[1.75rem] font-semibold leading-none mb-8">
        Settings
      </h1>
      <Tabs defaultValue="info" className="lg:max-w-full max-w-[342px] mx-auto">
        <TabsList>
          <TabsTrigger value="profile">Your Profile</TabsTrigger>
          <TabsTrigger value="info">Company Info</TabsTrigger>
          <TabsTrigger value="manageSeats">Manage Seats</TabsTrigger>
          <TabsTrigger value="dontContact" className="hidden lg:block">
            Do not Contact
          </TabsTrigger>
          <TabsTrigger value="integrations" className="hidden lg:block">
            Integrations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          Make changes to your profile here.
        </TabsContent>
        <TabsContent value="info">
          <CompanyInfo />
        </TabsContent>
        <TabsContent value="manageSeats">Manage Seats here</TabsContent>
        <TabsContent value="dontContact" className="hidden lg:block">
          Do not Contact here
        </TabsContent>
        <TabsContent value="integrations" className="hidden lg:block">
          Integrations here
        </TabsContent>
      </Tabs>
    </main>
  )
}
