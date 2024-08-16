import ImportLab from "./components/ImportLab"

export default function WorkDetail({ 
  params 
}: { 
  params: {slug: string} 
}) {
  return <>
    <ImportLab />
  </>
}
