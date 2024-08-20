import ModalWrapper from "../../ModalWrapper"
import WorkPage from "../../work/page"

export default function InterceptingWork() {
  return <div id="intercepting-modal">
    <p>
      Intercepting Routes{'/@modal/(.)work/page.tsx'}
    </p>
    <ModalWrapper>
      <WorkPage />
    </ModalWrapper>
  </div>
}
