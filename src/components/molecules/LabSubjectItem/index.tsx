import styles from "./_index.module.scss"
import Label from "@/components/atoms/Label";
import UpdateDate from "../UpdateDate";
import Image from "next/image";
import { zenKakuGothicNew_w400, zenKakuGothicNew_w700 } from "@/lib/fonts";
import parse from 'html-react-parser';
import Navigation from "@/modules/Navigation";

type Props = {
  subject: Newt.LabSubject,
  rootPath?: string
}

export default function LabSubjectItem({
  subject,
  rootPath = '/uni-lab/'
}: Props ) {
  return <>
    <Navigation href={`${rootPath}${subject.slug}`} className={`${styles.root} ${zenKakuGothicNew_w400.className}`}>
      <div className={styles.thumbnail}> 
        <Image 
          src={subject.thumbnail.src}
          alt=''
          width={subject.thumbnail.width}
          height={subject.thumbnail.height}
        />
      </div>
      <div className={styles.head}> 
        <p className={`${styles.title} ${zenKakuGothicNew_w700.className}`}> 
          {subject.title.substring(0, 36)}
          {subject.title.length <= 36 ? '' : '...'}
        </p>
        <div className={styles.info}> 
          <ul className={styles.labels}>
            {subject.status.map( label => (
              <li key={label}>
                <Label slug={label} />
              </li>
            ))}
          </ul>
          <div className={styles.date}>
            <UpdateDate updateTime={subject._sys.raw.updatedAt} />
          </div>
        </div>
      </div>
      <div className={styles.cont}>
        <div className={styles.excerpt}>
          {parse(
            subject.body.substring(0, 80)
          )}
          {subject.body.length <= 80 ? '' : '...'}
        </div>
      </div>
    </Navigation>
  </>
}
