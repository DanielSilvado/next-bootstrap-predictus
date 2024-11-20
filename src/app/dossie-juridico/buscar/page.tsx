"use client";
import React from "react";
import { Container, Tab, Card } from "react-bootstrap";

import { Tabs } from "components/Tabs/Tabs";
import { BackArrow, Bell, Person, Search } from "assets/icons/svgs";

import "./dossie.styles.scss";
import { Button } from "components/Button/Button";
import { DoughnutChart } from "components/DoughnutChart/DoughnutChart";

export default function Buscar() {
  const chartData = [
    { label: "Civel", value: 22, color: "#37865D" },
    { label: "Tributário", value: 78, color: "#B5DCC7" },
  ];

  return (
    <div className="bg-white p-3 pb-0 shadow-sm">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <Button variant="link" className="text-decoration-none">
            <BackArrow />
          </Button>
          <div
            className="rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: "40px",
              height: "40px",
              background: "var(--green-light-5)",
            }}
          >
            <Person style={{ fill: "var(--bs-primary)", fontSize: "21px" }} />
          </div>
          <span className="fw-bold text-secondary">123.456.789-00</span>
          <span className="text-muted">5 processos</span>
        </div>

        <div className="d-flex gap-2">
          <Button variant="outline-primary">
            Nova Busca <Search />
          </Button>
          <Button variant="primary">
            Monitorar <Bell />
          </Button>
        </div>
      </Container>

      <Container className="mt-3">
        <Tabs defaultActiveKey="visaoGeral" id="buscar-tabs">
          <Tab eventKey="visaoGeral" title="Visão Geral">
            <Container className="d-flex flex-row gap-3">
              <Card className="flex-1"></Card>
              <Card className="flex-1"></Card>
              <Card className="flex-1 p-3 gap-3">
                <h5 className="fw-medium text-tertiary">
                  Processos por ramo do direito
                </h5>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "250px", width: "100%" }}
                >
                  <DoughnutChart data={chartData} />
                </div>
              </Card>
            </Container>
          </Tab>

          <Tab eventKey="listaProcessos" title="Lista de Processos">
            <Container>
              <h5>Lista de Processos</h5>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}
