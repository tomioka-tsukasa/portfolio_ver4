import styles from "./_index.module.scss"
import ULCategoryIcon from "@/components/atoms/ULCategoryIcon"
import ULHomeIcon from "@/components/atoms/ULHomeIcon"
import NewtIcon from "@/components/atoms/NewtIcon"
import ULNav from "@/components/molecules/ULNav"
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
      icon: <ULHomeIcon />,
      href: '/uni-lab'
    },
    {
      slug: 'category',
      icon: <ULCategoryIcon />,
      href: '/uni-lab'
    },
    {
      slug: 'newt',
      icon: <NewtIcon />,
      href: 'https://app.newt.so/tsukasa-tomioka-lab'
    },
  ]
}

export default function ULHeader() {
  return <>
    <div className={styles.root}>
      <div className={styles.local}>
        <ULNav navs={navs.local} />
      </div>
      <div className={styles.global}>
        <GlobalMenuIcon />
      </div>
    </div>
  </>
}
