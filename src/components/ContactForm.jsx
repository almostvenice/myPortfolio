import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormGroup, Label, Input, Button, Form } from "reactstrap";
import "./contactForm.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import emailjs from "emailjs-com";

function ContactForm() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qd0an2r",
        "template_597htjp",
        e.target,
        "JT_puhZf1BF1TLr6h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div
      style={{
        display: "block",
        width: 400,
        padding: "5px 30px 30px 30px",
      }}
      className="bor"
    >
      <Player
        id="lottiePlayer"
        autoplay
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_gaplvsns.json"
        style={{ height: "100px", width: "100px", float: "" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
      <h5 className="text-white text-center">Contact Me For An Interview</h5>
      <Form onSubmit={sendEmail}>
        <FormGroup>
          <Label htmlFor="name" className="text-white"></Label>
          <Input
            name="name"
            type="text"
            id="name"
            placeholder="Name of employer"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="emailField" className="text-white"></Label>
          <Input
            type="email"
            name="email"
            id="emailField"
            placeholder="Enter your email"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message" className="text-white"></Label>
          <Input
            type="textarea"
            name="text"
            id="message"
            rows="4"
            cols="40"
            placeholder="Tell Me About The Opportunity"
          />
        </FormGroup>
        <div style={{ textAlign: "center" }}>
          <Button size="md">Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
