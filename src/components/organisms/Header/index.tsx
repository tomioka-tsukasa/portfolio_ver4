import HomeIcon from "@/components/atoms/HomeIcon";
import styles from "./_index.module.scss"
import GlobalNav from "@/components/molecules/GlobalNav";
import { Nav } from "@/types/global";
import GithubIcon from "@/components/atoms/GithubIcon";

const navs: Array<Nav> = [
  {
    name: 'Works.',
    slug: 'works',
    active: true,
  },
  {
    name: 'Blog.',
    slug: 'blog',
    active: true,
  },
  {
    name: 'TalkMe!',
    slug: 'about',
    active: true,
  },
  {
    name: 'Uni Lab.',
    slug: 'uni-lab',
    active: true,
  }
]

export default function Header() {
  return <>
    <header className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <div className={styles.backhome}>
            <HomeIcon />
          </div>
          <div className={styles.github}>
            <GithubIcon />
          </div>
        </div>
        <div className={styles.navs}>
          <GlobalNav navs={navs} />
        </div>
      </div>
    </header>
  </>
}
