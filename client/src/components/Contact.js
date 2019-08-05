import React from 'react';
import { content } from '../config';
import { Image, Button } from 'semantic-ui-react';
import files from '../components/FileLoader';


export default function () {
  return (
    <div
      id="contact"

      style={{
        padding: "80px",
        textAlign: "center",
        color: "white",
        backgroundColor: "#303233"
      }}
    >
      <h2>Get In Touch</h2>
      <Image
        style={{
          margin: "auto",
          marginBottom: "20px",
          marginTop: "20px"
        }}
        src={content.contact.image}
      />

      <p style={{ color: "white" }}>{content.contact.name}</p>
      <p>{content.contact.email}</p>
      <Button
        id='resume'
        as='a'
        href={files.jasonsResume}
      >Download my resume </Button>
    </div>
  )
}