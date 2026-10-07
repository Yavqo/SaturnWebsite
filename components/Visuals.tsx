import { Icon, type IconName } from "./Icon";

/** The Saturn window with Zarah open in a side panel. Product media, built in HTML. */
export function BrowserMock({ className = "" }: { className?: string }) {
  return (
    <div className={`browser ${className}`.trim()} role="img" aria-label="The Saturn browser with the Zarah assistant open in a side panel, summarising an article about ocean currents.">
      <div className="browser-top">
        <div className="dots" aria-hidden="true"><i /><i /><i /></div>
        <div className="tabs" aria-hidden="true">
          <div className="tab is-active"><Icon name="globe" />How ocean currents work</div>
          <div className="tab"><Icon name="globe" />Flight to Lisbon</div>
          <div className="tab"><Icon name="globe" />Recipe notes</div>
        </div>
      </div>
      <div className="browser-bar" aria-hidden="true">
        <div className="url"><Icon name="lock" />oceanjournal.example/currents</div>
        <div className="zarah-toggle"><Icon name="spark" /><span>Zarah</span></div>
      </div>
      <div className="browser-body" aria-hidden="true">
        <div className="page-mock">
          <span className="kicker">Science · 8 min read</span>
          <h3>How ocean currents shape the climate</h3>
          <div className="skel w90" /><div className="skel w80" /><div className="skel w90" /><div className="skel w60" />
          <div className="page-img" />
          <div className="skel w80" /><div className="skel w70" />
        </div>
        <AssistantPanel />
      </div>
    </div>
  );
}

export function AssistantPanel() {
  return (
    <div className="assistant">
      <div className="assistant-head">
        <span className="avatar"><Icon name="spark" /></span>
        <div>Zarah<small>Reading this page</small></div>
      </div>
      <div className="bubble user">Give me the short version</div>
      <div className="bubble zarah">
        Three points:
        <ul>
          <li>Currents move heat from the tropics to the poles.</li>
          <li>Warming water is slowing the Atlantic loop.</li>
          <li>Coastal weather is the first thing to change.</li>
        </ul>
      </div>
      <div className="ask-field">Ask Zarah anything</div>
    </div>
  );
}

/** Standalone Zarah card for dark media panels. */
export function AssistantCard() {
  return (
    <div className="assistant-card" role="img" aria-label="Zarah answering a question about the page you are on.">
      <AssistantPanel />
    </div>
  );
}

export type Row = { icon: IconName; label: string; tag?: string; hl?: boolean };

/** Small stack of rows used as a visual inside dark media cards. */
export function MiniRows({ rows }: { rows: Row[] }) {
  return (
    <div className="mini" aria-hidden="true">
      {rows.map((r) => (
        <div key={r.label} className={`row${r.hl ? " hl" : ""}`}>
          <Icon name={r.icon} />
          {r.label}
          {r.tag && <small>{r.tag}</small>}
        </div>
      ))}
    </div>
  );
}
