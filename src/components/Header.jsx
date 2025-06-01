
export default function Header({onselect}){
    return <header >
        <nav id="nav">
            <img src="Capture-removebg-preview - Copy.png" alt="logo" />
            <ul>
                <li>
                    <button onClick={()=>onselect('home')}>Home</button>
                </li>
                <li>
                    <button onClick={()=>onselect('about')}>About</button>
                </li>
                <li>
                    <button onClick={()=>onselect('skills')}>Skills</button>
                </li>
                <li>
                    <button onClick={()=>onselect('projects')}>Projects</button>
                </li>
                <li>
                    <button onClick={()=>onselect('contact')}>Contact</button>
                </li>
            </ul>
        </nav>
    </header>
}