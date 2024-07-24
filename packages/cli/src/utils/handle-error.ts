import * as p from "@clack/prompts"

export function handleError(error: unknown) {
  // provide a newline gap
  p.log.message()

  if (typeof error === "string") {
    p.cancel(error)
    process.exit(1)
  }

  // unexpected error
  if (error instanceof Error) {
    p.cancel(error.stack)
    process.exit(1)
  }

  p.cancel("Something went wrong. Please try again.")
  process.exit(1)
}
