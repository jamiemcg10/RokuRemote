import RokuList from "@/components/roku-list"
import { useRouter } from "expo-router"

export default function Home() {
  const router = useRouter()
  // router.push("/add-roku")
  // setTimeout(() => {
  //   router.push("/add-roku")
  // }, 1000)
  return (
    // <>
    //   {selected && <RemoteView selected={selected} setSelected={setSelected} />}
    //   {addNew && (
    //     <NewDeviceForm
    //       devices={devices}
    //       setDevices={setDevices}
    //       showAddNew={showAddNew}
    //     />
    //   )}
    <RokuList />
    // </>
  )
}
