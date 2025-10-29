"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import {
  Bold,
  Italic,
  Underline,
  Link2,
  ImageIcon,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Quote,
  Code,
  Undo2,
  Redo2,
} from "lucide-react"

interface FormRichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  minHeight?: string
}

export function FormRichTextEditor({
  value,
  onChange,
  placeholder = "Start typing your content here...",
  minHeight = "min-h-64",
}: FormRichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [history, setHistory] = useState<string[]>([value || ""])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [isEmpty, setIsEmpty] = useState(!value)

  useEffect(() => {
    if (editorRef.current && value) {
      editorRef.current.innerHTML = value
      setIsEmpty(false)
    }
  }, [])

  const executeCommand = (command: string, commandValue?: string) => {
    document.execCommand(command, false, commandValue)
    editorRef.current?.focus()
    updateHistory()
  }

  const updateHistory = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML
      const newHistory = history.slice(0, historyIndex + 1)
      newHistory.push(newContent)
      setHistory(newHistory)
      setHistoryIndex(newHistory.length - 1)
      onChange(newContent)
      setIsEmpty(!newContent || newContent === "<br>")
    }
  }

  const undo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      if (editorRef.current) {
        editorRef.current.innerHTML = history[newIndex]
        onChange(history[newIndex])
        setIsEmpty(!history[newIndex] || history[newIndex] === "<br>")
      }
    }
  }

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1
      setHistoryIndex(newIndex)
      if (editorRef.current) {
        editorRef.current.innerHTML = history[newIndex]
        onChange(history[newIndex])
        setIsEmpty(!history[newIndex] || history[newIndex] === "<br>")
      }
    }
  }

  const insertLink = () => {
    const url = prompt("Enter URL:")
    if (url) {
      executeCommand("createLink", url)
    }
  }

  const insertImage = () => {
    const url = prompt("Enter image URL:")
    if (url) {
      executeCommand("insertImage", url)
    }
  }

  const handleInput = () => {
    updateHistory()
  }

  const handleFocus = () => {
    if (isEmpty && editorRef.current) {
      editorRef.current.innerHTML = ""
      setIsEmpty(false)
    }
  }

  const handleBlur = () => {
    if (editorRef.current && !editorRef.current.innerHTML) {
      setIsEmpty(true)
    }
  }

  return (
    <div className="space-y-4">
      <Card className="bg-card border border-border shadow-md overflow-hidden">
        {/* Toolbar */}
        <div className="border-b border-border p-3 bg-muted/30">
          <div className="flex flex-wrap gap-2">
            {/* Text Formatting */}
            <div className="flex gap-1 border-r border-border pr-2">
              <ToolbarButton icon={Bold} label="Bold" onClick={() => executeCommand("bold")} />
              <ToolbarButton icon={Italic} label="Italic" onClick={() => executeCommand("italic")} />
              <ToolbarButton icon={Underline} label="Underline" onClick={() => executeCommand("underline")} />
            </div>

            {/* Headings */}
            <div className="flex gap-1 border-r border-border pr-2">
              <ToolbarButton icon={Heading1} label="Heading 1" onClick={() => executeCommand("formatBlock", "<h1>")} />
              <ToolbarButton icon={Heading2} label="Heading 2" onClick={() => executeCommand("formatBlock", "<h2>")} />
            </div>

            {/* Lists */}
            <div className="flex gap-1 border-r border-border pr-2">
              <ToolbarButton icon={List} label="Bullet List" onClick={() => executeCommand("insertUnorderedList")} />
              <ToolbarButton
                icon={ListOrdered}
                label="Numbered List"
                onClick={() => executeCommand("insertOrderedList")}
              />
            </div>

            {/* Content */}
            <div className="flex gap-1 border-r border-border pr-2">
              <ToolbarButton icon={Quote} label="Quote" onClick={() => executeCommand("formatBlock", "<blockquote>")} />
              <ToolbarButton icon={Code} label="Code" onClick={() => executeCommand("formatBlock", "<pre>")} />
            </div>

            {/* Media */}
            <div className="flex gap-1 border-r border-border pr-2">
              <ToolbarButton icon={Link2} label="Link" onClick={insertLink} />
              <ToolbarButton icon={ImageIcon} label="Image" onClick={insertImage} />
            </div>

            {/* History */}
            <div className="flex gap-1">
              <ToolbarButton icon={Undo2} label="Undo" onClick={undo} disabled={historyIndex === 0} />
              <ToolbarButton icon={Redo2} label="Redo" onClick={redo} disabled={historyIndex === history.length - 1} />
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="p-4 relative">
          <div
            ref={editorRef}
            contentEditable
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`${minHeight} max-h-96 overflow-y-auto outline-none prose prose-invert max-w-none
              focus:outline-none focus:ring-0
              text-foreground
              [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-3 [&_h1]:mt-4
              [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-2 [&_h2]:mt-3
              [&_p]:mb-3 [&_p]:leading-relaxed
              [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-3
              [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-3
              [&_li]:mb-2
              [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-3 [&_blockquote]:text-muted-foreground
              [&_pre]:bg-muted [&_pre]:p-3 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:mb-3 [&_pre]:font-mono [&_pre]:text-sm
              [&_a]:text-primary [&_a]:underline [&_a]:hover:opacity-80
              [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded [&_img]:my-3
              [&_b]:font-bold [&_i]:italic [&_u]:underline`}
            suppressContentEditableWarning
          />
          {isEmpty && (
            <div className="absolute top-4 left-4 text-muted-foreground pointer-events-none">{placeholder}</div>
          )}
        </div>
      </Card>

      {value && (
        <Card className="bg-card border border-border p-4">
          <h3 className="text-sm font-semibold text-foreground mb-3">Preview</h3>
          <div
            className="prose prose-invert max-w-none text-sm
              [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-3 [&_h1]:mt-4
              [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-2 [&_h2]:mt-3
              [&_p]:mb-3 [&_p]:leading-relaxed
              [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-3
              [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-3
              [&_li]:mb-2
              [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-3 [&_blockquote]:text-muted-foreground
              [&_pre]:bg-muted [&_pre]:p-3 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:mb-3 [&_pre]:font-mono [&_pre]:text-xs
              [&_a]:text-primary [&_a]:underline [&_a]:hover:opacity-80
              [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded [&_img]:my-3
              [&_b]:font-bold [&_i]:italic [&_u]:underline"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </Card>
      )}
    </div>
  )
}

interface ToolbarButtonProps {
  icon: React.ComponentType<{ className?: string }>
  label: string
  onClick: () => void
  disabled?: boolean
}

function ToolbarButton({ icon: Icon, label, onClick, disabled = false }: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={label}
      type="button"
      className="p-2 rounded hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-200 text-foreground hover:text-primary"
      aria-label={label}
    >
      <Icon className="w-4 h-4" />
    </button>
  )
}
