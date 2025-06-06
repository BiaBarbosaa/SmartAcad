import './paginas/home/Home.css';
import React from "react";
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function MainHome() {

    const dadosLinha = [
        { mes: "JAN", ativos: 40, inativos: 10 },
        { mes: "FEV", ativos: 100, inativos: 20 },
        { mes: "MAR", ativos: 80, inativos: 5 },
        { mes: "ABR", ativos: 100, inativos: 40},
        { mes: "MAI", ativos: 50, inativos: 8 },
        { mes: "JUN", ativos: 80, inativos: 20 },
    ];

    const dadosPizza = [
        { plano: "Mensal", valor: 65 },
        { plano: "Trimestral", valor: 25 },
        { plano: "Anual", valor: 10 },
    ];

    const CORES = ["#127dda", "#34D838", "#FFEA00"];

    const dadosBarras = [
        { mes: "JAN", Musculação: 80, Spinning: 40, Zumba: 30, Personal: 60, "Avaliação física": 20, Nutricionista: 10 },
        { mes: "FEV", Musculação: 100, Spinning: 50, Zumba: 40, Personal: 85, "Avaliação física": 30, Nutricionista: 15 },
        { mes: "MAR", Musculação: 120, Spinning: 60, Zumba: 50, Personal: 70, "Avaliação física": 40, Nutricionista: 20 },
        { mes: "ABR", Musculação: 140, Spinning: 70, Zumba: 60, Personal: 100, "Avaliação física": 50, Nutricionista: 25 },
    ];

  
    return (
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 container-principal">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 borda-inferior">
                <h1 className="h2">Dashboard</h1>
            </div>

            <div className="container-metricas">
                <div className="cartao-metrica azul">
                    <h4>USUÁRIOS ATIVOS</h4>
                    <span>933</span>
                </div>
                <div className="cartao-metrica vermelho">
                    <h4>USUÁRIOS INATIVOS</h4>
                    <span>50</span>
                </div>
                <div className="cartao-metrica verde">
                    <h4>TOTAL DE CONTRATOS</h4>
                    <span>976</span>
                </div>
            </div>

            

            <div className="container-graficos">
                <div className="graficos-superiores">
                    <div className="cartao-grafico">
                        <div className="cabecalho-grafico">
                            <h3>Clientes ativos e inativos</h3>
                            <div className="linha-divisoria"></div>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={dadosLinha}>
                                <XAxis dataKey="mes" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="ativos" stroke="#308B99" strokeWidth={2} />
                                <Line type="monotone" dataKey="inativos" stroke="#FF3131" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    
                    <div className="cartao-grafico">
                        <div className="cabecalho-grafico">
                            <h3>Rentabilidade por tipo de plano</h3>
                            <div className="linha-divisoria"></div>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={dadosPizza}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    dataKey="valor"
                                    nameKey="plano"
                                    labelLine={false}
                                    label={({ 
                                        cx,
                                        cy,
                                        midAngle,
                                        innerRadius,
                                        outerRadius,
                                        percent
                                    }) => {
                                        const RADIAN = Math.PI / 180;
                                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                        const y = cy + radius * Math.sin(-midAngle * RADIAN);

                                    }}
                                >
                                    {dadosPizza.map((entry, index) => (
                                        <Cell
                                            key={`celula-${index}`}
                                            fill={CORES[index % CORES.length]}
                                        />
                                    ))}
                                </Pie>
                                <Legend 
                                    formatter={(value) => {
                                        const porcentagem = dadosPizza.find(d => d.plano === value)?.valor;
                                        return `${value} (${porcentagem}%)`;
                                    }}
                                />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="grafico-inferior">
                    <div className="cabecalho-grafico">
                        <h3>Número de clientes por contrato</h3>
                        <div className="linha-divisoria"></div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={dadosBarras}>
                            <XAxis dataKey="mes" />
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
    );
}

export default MainHome;