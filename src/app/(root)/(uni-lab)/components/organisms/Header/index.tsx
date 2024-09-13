import styles from "./_index.module.scss"
import CategoryIcon from "@/app/(root)/(uni-lab)/components/atoms/CategoryIcon"
import HomeIcon from "@/app/(root)/(uni-lab)/components/atoms/HomeIcon"
import NewtIcon from "@/components/atoms/NewtIcon"
import Nav from "@/app/(root)/(uni-lab)/components/molecules/Nav"
import GlobalMenuIcon from "@/components/atoms/GlobalMenuIcon"

interface Navs {
  global: UniLab.GlobalNav;
  local: UniLab.LocalNav;
}

const navs: Navs = {
  global: [
    {
      name: 'Works.',
      slug: 'works'
    },
    {
      name: 'Blog.',
      slug: 'blog'
    },
    {
      name: 'TalkMe!',
      slug: 'about'
    },
    {
      name: 'Uni Lab.',
      slug: 'uni-lab'
    }
  ],
  local: [
    {
      slug: 'home',
      icon: <HomeIcon />,
      href: '/uni-lab'
    },
    {
      slug: 'category',
      icon: <CategoryIcon />,
      href: '/uni-lab'
    },
    {
      slug: 'newt',
      icon: <NewtIcon />,
      href: 'https://app.newt.so/tsukasa-tomioka-lab'
    },
  ]
}

export default function Header() {
  return <>
    <header className={styles.root}>
      <div className={styles.local}>
        <Nav navs={navs.local} />
      </div>
      <nav className={styles.global}>
        <GlobalMenuIcon />
      </nav>
    </header>
  </>
}
