import BlogSidebar from "@/components/organisms/BlogSidebar";
import styles from "./_index.module.scss"
import React from "react";

export default function BlogTemplate({
  children,
  className
}: {
  children: React.ReactNode;
  className?: {
    main?: string;
    nav?: string;
  }
}) {
  let main: React.ReactNode;
  let nav: React.ReactNode;
  if (className?.main) main = <>
    <main className={`${className?.main ?? ''}`}>
      <div className={`${styles.main}`}>
        {children}
      </div>
    </main>
  </>
  else main = <>
    <main className={`${styles.main}`}>
      {children}
    </main>
  </>
  if (className?.nav) nav = <>
    <nav className={`${className?.nav ?? ''}`}>
      <div className={`${styles.nav}`}>
        <BlogSidebar />
      </div>
    </nav>
  </>
  else nav = <>
    <nav className={`${styles.nav}`}>
      <BlogSidebar />
    </nav>
  </>
  return <>
    <div className={styles.root}>
      {main}
      {nav}
    </div>
  </>
}
