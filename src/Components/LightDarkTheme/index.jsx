import UseLocalStorage from "./UseLocalStorage";
import '../LightDarkTheme/style.css';

export default function LightDarkTheme(){
    const[theme, setTheme] = UseLocalStorage('theme','dark')
    function handleToggleClick(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    console.log('====================================');
    console.log(theme);
    console.log('====================================');
    return(
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container-theme">
                <p>Hello World!</p>
                <button onClick={handleToggleClick}>Change Theme</button>
            </div>
        </div>
    );
}