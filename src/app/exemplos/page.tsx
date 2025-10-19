"use client"

import React from 'react'
import Image from "next/image";
import ModalPadrao from "./../../components/Modal";
import Button from "./../../components/Button";
import Input from './../../components/Input';
import { MockData } from "./../../data/mock-data"
import { Accordion } from 'react-bootstrap';

export default function Exemplos() {

  const [modalShow, setModalShow] = React.useState<boolean>(false);
  console.log(MockData)

  return (
    <main className={`container mt-5`}>
     <h1>Exemplos de Componentes</h1>
     <span className="icones icone-arrows-counter-clockwise"></span>

      <Button onClick={() => setModalShow(true)}>Abrir Modal</Button>     
      <Button iconeName='icone-arrow-right' iconeDirection="right">Button</Button>

      <Input label="Nome Completo" iconeName='icone-user-circle' required={true}/>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <ModalPadrao
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </main>
  );
}
