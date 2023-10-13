import "./app-info.css";

const AppInfo = ({ employees, increased }) => {
  return (
    <div className="app-info">
      <h1>TP company employee accounting</h1>
      <h2>Total number of employees: {employees}</h2>
      <h2>The prize will be received: {increased} </h2>
    </div>
  );
};

export default AppInfo;
