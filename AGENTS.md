# Global Agent Notes

## Local Hosting

- For every locally hosted web project, use a stable project-name path in the URL instead of giving the user a bare host and port.
- Preferred local URL shape: `http://127.0.0.1:<port>/<ProjectName>/`
- Prefer readable IPv4 localhost links over bracketed IPv6 URLs.
- Pin each project's dev server port where practical, ideally with strict-port behavior, so the local URL stays permanent for that project.
- Record the permanent local URL in that project's `AGENTS.md`.
- If a pinned port is occupied, stop the stale server or report the conflict; do not silently move the project to a new URL unless the user approves the new permanent URL.

## Verbatim

- Permanent local URL: `http://127.0.0.1:3842/Verbatim/`
- Dev command: `npm run dev`
- Pinned port: `3842`
- Local project path rewrite: `/Verbatim/` rewrites to the app root so production can still deploy at `/`.
