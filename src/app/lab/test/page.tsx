import styles from "./_index.module.scss";

export default function LabTest() {
  return <>
    <div className={styles.root}>
      <h1>
        研究項目の読み込みテスト
      </h1>
      <p>
        Hello World.<br />
        `@/app/lab/`配下で開発したページを読み込んで閲覧可能！
      </p>
    </div>
  </>
}
