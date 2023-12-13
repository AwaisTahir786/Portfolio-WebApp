import React from 'react'

const cvLink="http://localhost:3000/images/AT_frontend2.pdf";



export default async function handler(req:any, res:any) {
    try {
      // Assume you receive the file URL as a query parameter
      const { url } = req.query;
  
      // Fetch the file
      const response = await fetch(url);
      const blob = await response.blob();
  
      // Extract the filename from the URL or provide a default name
      const filename = url.split("/").pop() || "download";
  
      // Set headers for the response
      res.setHeader("Content-Type", "application/octet-stream");
      res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
      res.send(Buffer.from(await blob.arrayBuffer()));
    } catch (error) {
      console.error("File download failed:", error);
      res.status(500).end("Internal Server Error");
    }
  }
  