import { ChatPlaceholderIcon } from "../SVG"

export const ChatPlaceholder = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8 bg-grey">
      <div className="w-2/5">
        <ChatPlaceholderIcon />
      </div>
      <div className="text-center">
        <h1 className="font-bold text-xl">Whatsapp API Web</h1>
        <p className="mt-2 font-light">
          Kirim dan terima pesan untuk 1 akun di berbagai berangkat tanpa batas.{" "}
        </p>
      </div>
    </div>
  )
}
