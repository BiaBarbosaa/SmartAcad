import './paginas/home/Home.css';
import React from "react";
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function MainHome() {

    const dataLine = [
        { name: "JAN", ativos: 150, inativos: 10 },
        { name: "FEV", ativos: 100, inativos: 20 },
        { name: "MAR", ativos: 50, inativos: 30 },
        { name: "ABR", ativos: 100, inativos: 40 },
        { name: "MAI", ativos: 50, inativos: 50 },
        { name: "JUN", ativos: 10, inativos: 60 },
    ];

    const dataPie = [
        { name: "Mensal", value: 50 },
        { name: "Trimestral", value: 25 },
        { name: "Anual", value: 25 },
    ];

    const COLORS = ["#127dda", "#34D838", "#FFEA00"];

    const dataBar = [
        { name: "JAN", Musculação: 80, Spinning: 40, Zumba: 30, Personal: 60, "Avaliação física": 20, Nutricionista: 10 },
        { name: "FEV", Musculação: 100, Spinning: 50, Zumba: 40, Personal: 85, "Avaliação física": 30, Nutricionista: 15 },
        { name: "MAR", Musculação: 120, Spinning: 60, Zumba: 50, Personal: 70, "Avaliação física": 40, Nutricionista: 20 },
        { name: "ABR", Musculação: 140, Spinning: 70, Zumba: 60, Personal: 100, "Avaliação física": 50, Nutricionista: 25 },
    ];

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                </div>
                <div className="dashboard-container">
                    {/* Cards Superiores */}
                    {/* <div className="grid-container">
                        <div className="info-card">
                            <h3>USUÁRIOS ATIVOS</h3>
                            <div className="info-value">987</div>
                        </div>
                        <div className="info-card">
                            <h3>USUÁRIOS INATIVOS</h3>
                            <div className="info-value">103</div>
                        </div>
                        <div className="info-card">
                            <h3>TOTAL CONTRATO</h3>
                            <div className="info-value">679</div>
                        </div>
                    </div> */}

                    {/* Gráficos Superiores */}
                    <div className="top-charts-wrapper">
                        <div className="chart-card">
                           
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={dataLine}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="ativos" stroke="#308B99" strokeWidth={2} />
                                    <Line type="monotone" dataKey="inativos" stroke="#FF3131" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="chart-card">
                       
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie data={dataPie} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                                        {dataPie.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Legend />
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Gráfico Inferior */}
                    <div className="chart-card full-width">
                   
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={dataBar}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Musculação" fill="#FF0000" />
                                <Bar dataKey="Spinning" fill="#308B99" />
                                <Bar dataKey="Zumba" fill="#FFEA00" />
                                <Bar dataKey="Personal" fill="#34D838" />
                                <Bar dataKey="Avaliação física" fill="#800080" />
                                <Bar dataKey="Nutricionista" fill="#FFA500" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MainHome;