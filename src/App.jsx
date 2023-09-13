import SectionBanner from "./components/SectionBanner"
import SectionContact from "./components/SectionContact"
import SectionHero from "./components/SectionHero"
import SectionList from "./components/SectionList"
import WebsiteFooter from "./components/WebsiteFooter"
import WebsiteHeader from "./components/WebsiteHeader"

function App() {

  return (
    <>
      <main className="min-h-full w-full flex flex-col scroll-smooth hyphens-auto">
        <WebsiteHeader />
        <SectionBanner />
        <SectionHero />
        <SectionList />
        <SectionContact />
        <WebsiteFooter />
      </main>
    </>
  )
}

export default App
