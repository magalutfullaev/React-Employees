import './app-info.css';

const AppInfo = ({employees, increases}) => {

    return (
        <div className="app-info">
            <h1>Учет сортудников в компании M</h1>
            <h2>Общая число сортудников: {employees}</h2>
            <h2>Премия получат: {increases}</h2> 
        </div>
    )
}

export default AppInfo;