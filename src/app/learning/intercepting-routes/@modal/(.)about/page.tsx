import AboutPage from "../../about/page"
import ModalWrapper from "../../ModalWrapper"

export default function InterceptingAbout() {
  return <div id="intercepting-modal">
    <p>
      Intercepting Routes{'/@modal/(.)about/page.tsx'}
    </p>
    <ModalWrapper>
      <AboutPage />
    </ModalWrapper>
  </div>
}
