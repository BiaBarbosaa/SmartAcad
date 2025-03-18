import './paginas/home/Home.css'
import React from "react";
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, } from "recharts";

function MainHome() {

    const dataLine = [
        { name: "Jan", ativos: 100, inativos: 20 },
        { name: "Fev", ativos: 120, inativos: 30 },
        { name: "Mar", ativos: 150, inativos: 40 },
        { name: "Abr", ativos: 180, inativos: 50 },
        { name: "Mai", ativos: 200, inativos: 60 },
        { name: "Jun", ativos: 220, inativos: 70 },
    ];

    const dataPie = [
        { name: "Mensal", value: 50 },
        { name: "Trimestral", value: 35 },
        { name: "Anual", value: 15 },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

    const dataBar = [
        { name: "Jan", Musculação: 80, Spinning: 40, Zumba: 30 },
        { name: "Fev", Musculação: 100, Spinning: 50, Zumba: 40 },
        { name: "Mar", Musculação: 120, Spinning: 60, Zumba: 50 },
        { name: "Abr", Musculação: 140, Spinning: 70, Zumba: 60 },
    ];
    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                </div>
                <div className="dashboard-container">
                  
                    <div className="grid-container">
                        <div className="chart-card">
                            <h3>Usuários Ativos e Inativos</h3>
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={dataLine}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="ativos" stroke="#0088FE" strokeWidth={2} />
                                    <Line type="monotone" dataKey="inativos" stroke="#FF0000" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="chart-card">
                            <h3>Rentabilidade por Tipo de Plano</h3>
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

                        <div className="chart-card">
                            <h3>Atividades Mensais</h3>
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart data={dataBar}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="Musculação" fill="#FF0000" />
                                    <Bar dataKey="Spinning" fill="#0088FE" />
                                    <Bar dataKey="Zumba" fill="#00C49F" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                </main>
            </>
            )
}
            export default MainHome
