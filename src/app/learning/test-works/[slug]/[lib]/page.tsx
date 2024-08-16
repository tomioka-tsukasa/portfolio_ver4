import worksData from "@/data/works.json"

export default function WorkDetailLib({ 
  params 
}: { 
  params: {
    slug: string,
    lib: 'lib'
  } 
}) {
  const currentWork = worksData.filter(work => work.slug === params.slug)[0]
  return <>
    <h2>
      Hello
    </h2>
  </>
}

export async function generateStaticParams() {
  return worksData.map( work => ({
    slug: work.slug,
    lib: 'lib'
  }))
}
