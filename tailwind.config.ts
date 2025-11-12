import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          50:'#f4f7ff',100:'#e8edff',200:'#cfd9ff',300:'#a6baff',
          400:'#7c9bff',500:'#567dff',600:'#3d61ea',700:'#304cc0',
          800:'#263c97',900:'#20357e'
        },
        ink: {
          50:'#f8fafc',100:'#f1f5f9',200:'#e2e8f0',300:'#cbd5e1',
          400:'#94a3b8',500:'#64748b',600:'#475569',700:'#334155',
          800:'#1f2937',900:'#0f172a'
        }
      },
      boxShadow: {
        soft: '0 6px 30px rgba(0,0,0,.06)',
        ring: '0 1px 0 rgba(255,255,255,.6) inset, 0 8px 30px rgba(16,24,40,.06)'
      },
      borderRadius: { xl2: '1.25rem' },
    }
  }
}
