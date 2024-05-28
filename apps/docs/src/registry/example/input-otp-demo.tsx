import {
  InputOTP,
  InputOTPGroup,
  InputOTPHiddenInput,
  InputOTPSeparator,
  InputOTPSlot
} from "~/registry/ui/input-otp"

export default function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPHiddenInput />
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
