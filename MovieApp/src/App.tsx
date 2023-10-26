import { FunctionComponent } from "react";
import AppHeader from "./AppHeader";
import AppList from "./AppList";


const App:FunctionComponent=()=>{
    return(
        <div>
            <AppHeader/>
            <main>
            <AppList/>
            </main>
            
        </div>
    )
}

export default App;