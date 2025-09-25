import { exec } from "child_process"

const port = process.env.PORT || 4173
exec(`vite preview --host 0.0.0.0 --port ${port}`, (err, stdout, stderr) => {
  if (err) {
    console.error("Preview failed:", err)
    return
  }
  console.log(stdout)
  console.error(stderr)
})
