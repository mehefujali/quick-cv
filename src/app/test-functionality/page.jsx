"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Heading1, Heading2, Heading3, Heading4, Italic, List, ListOrdered } from 'lucide-react'

export default function TestFunctionality() {

   const options = [
      {
         icon: <Heading1 className='size-4' />,
         onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run()
      },
      {
         icon: <Heading2 className='size-4' />,
         onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run()
      },
      {
         icon: <Heading3 className='size-4' />,
         onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run()
      },
      {
         icon: <Heading4 className='size-4' />,
         onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run()
      },
      {
         icon: <Bold className='size-4' />,
         onClick: () => editor.chain().focus().toggleBold().run()
      },
      {
         icon: <Italic className='size-4' />,
         onClick: () => editor.chain().focus().toggleItalic().run()
      },
      {
         icon: <AlignLeft className='size-4' />,
         onClick: () => editor.chain().focus().setTextAlign('left').run()
      },
      {
         icon: <AlignCenter className='size-4' />,
         onClick: () => editor.chain().focus().setTextAlign('center').run()
      },
      {
         icon: <AlignRight className='size-4' />,
         onClick: () => editor.chain().focus().setTextAlign('right').run()
      },
      {
         icon: <AlignJustify className='size-4' />,
         onClick: () => editor.chain().focus().setTextAlign('justify').run()
      },
      {
         icon: <List className='size-4' />,
         onClick: () => editor.chain().focus().toggleBulletList().run()
      },
      {
         icon: <ListOrdered className='size-4' />,
         onClick: () => editor.chain().focus().toggleOrderedList().run()
      },
   ]

   const editor = useEditor({
      extensions: [StarterKit],
      content: '<p>Hello World! 🌎️</p> <p> New line </p>',
   })

   return (
      <div className='p-10'>
         <EditorContent editor={editor} />
      </div >
   )
}
