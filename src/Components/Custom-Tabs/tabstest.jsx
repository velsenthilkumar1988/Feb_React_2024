import TabsComponent from ".";

function RandomComponent(){
    return <h1>Some RAndom Component</h1>
}
export default function Tabtest(){

    const tabs =[
        {
            label : 'Tab 1',
            content : <div>This is the content of Tabs1</div>
        },
        {
            label : 'Tab 2',
            content : <div>This is the content of Tabs2</div>
        },
        {
            label : 'Tab 3',
            content : <RandomComponent/>
        }

    ]
    function handleChange(currentTabIndex){
        console.log('====================================');
        console.log(currentTabIndex);
        console.log('====================================');
    }
    // return(
    //     // <Tabs tabsContent={tabs} onChange={handleChange}/>
        
    // )
    return <TabsComponent tabsContent={tabs} onChange={handleChange}/>;
}

