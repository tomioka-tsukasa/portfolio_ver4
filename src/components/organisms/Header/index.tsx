import HomeIcon from "@/components/atoms/HomeIcon";
import styles from "./_index.module.scss"
import GlobalNav from "@/components/molecules/GlobalNav";
import { Navs } from "@/types/nav";

const navs: Navs = [
  {
    name: 'Works.',
    slug: 'works',
    active: false,
  },
  {
    name: 'Blog.',
    slug: 'blog',
    active: true,
  },
  {
    name: 'TalkMe!',
    slug: 'about',
    active: false,
  },
  {
    name: 'Uni Lab.',
    slug: 'uni-lab',
    active: true,
  }
]

export default function Header() {
  return <>
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.backhome}>
          <HomeIcon />
        </div>
        <div className={styles.navs}>
          <GlobalNav navs={navs} />
        </div>
      </div>
    </div>
  </>
}
