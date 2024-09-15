import styles from "./_index.module.scss"
import Heading from "@/components/atoms/Heading"
import TabContent from "@/modules/Tab/components/TabContent"
import TabProvider from "@/modules/Tab/components/TabProvider"
import TabTrigger from "@/modules/Tab/components/TabTrigger"
import Connection from "./sections/Connection"
import OtherTab from "./sections/OtherTab"

export default function LabReactModuleTab() {
  return <>
    <article className={styles.root}>
      <div className={styles.heading}>
        <Heading tag="h3" type={'border'}>
          {'最小限の実装'}
        </Heading>
      </div>
      <div className={styles.tabArea}>
        <TabProvider initialState={{
          active: '001'
        }}>
          <div className="list">
            <TabTrigger member={{
              id: '001'
            }}>
              <div style={{border: '1px solid #fff', padding: '9px'}}>
                タブ001
              </div>
            </TabTrigger>
            <TabTrigger member={{
              id: '002'
            }}>
              <div style={{border: '1px solid #fff', padding: '9px'}}>
                タブ002
              </div>
            </TabTrigger>
            <TabTrigger member={{
              id: '003'
            }}>
              <div style={{border: '1px solid #fff', padding: '9px'}}>
                タブ003
              </div>
            </TabTrigger>
          </div>
          <TabContent member={{
            id: '001'
          }}>
            <div style={{backgroundColor: 'rgba(255, 255, 255, .2)', padding: '9px'}}>
              <p>
                001
              </p>
            </div>
          </TabContent>
          <TabContent member={{
            id: '002'
          }}>
            <div style={{backgroundColor: 'rgba(255, 255, 255, .2)', padding: '9px'}}>
              <p>
                002
              </p>
            </div>
          </TabContent>
          <TabContent member={{
            id: '003'
          }}>
            <div style={{backgroundColor: 'rgba(255, 255, 255, .2)', padding: '9px'}}>
              <p>
                003
              </p>
            </div>
          </TabContent>
        </TabProvider>
      </div>
      <Connection />
      <OtherTab />
    </article>
  </>
}
