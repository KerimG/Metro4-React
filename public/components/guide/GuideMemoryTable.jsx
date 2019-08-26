import React from "react";
import {Adsense, MemoryTable} from "../../../src";
import PrismCode from "../PrismCode";
import Example from "../Example";

export default class GuideMemoryTable extends React.Component {
    render(){
        const codeImport = `import {MemoryTable} from "metro4-react";`;

        return(
            <div>
                <h1>MemoryTable</h1>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>

                <h3>Introduction</h3>
                <Example>
                    <MemoryTable source={'../data/table.json'} rowsPrepend='Show: '/>
                </Example>

                <br/>
                <h3>Importing</h3>
                <PrismCode language="js" code={codeImport}/>

                <br/>
                <Adsense client={'ca-pub-1632668592742327'} slot={'4639163605'} test={SITE_MODE_DEV}/>
                <br/>
            </div>
        )
    }
}