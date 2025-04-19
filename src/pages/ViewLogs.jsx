import { useEffect, useState } from 'react';
import './ViewLogs.css';
import supabase from '../config/supabaseClient';

export default function ViewLogs() {
  const [logs, setLogs] = useState([]); // State to store logs
  const [loading, setLoading] = useState(true); // State to show loading status

  // Fetch logs from Supabase when the component mounts
  useEffect(() => {
    async function fetchLogs() {
      setLoading(true); // Start loading
      try {
        const { data, error } = await supabase
          .from('daily_logs') // Replace 'daily_logs' with your table name
          .select('*'); // Fetch all rows and columns

        if (error) {
          console.error('Error fetching logs:', error.message);
        } else {
          setLogs(data); // Store the fetched logs in state
        }
      } catch (error) {
        console.error('Unexpected error:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    }

    fetchLogs(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : logs.length > 0 ? (
        <div className="logs-container">
          {logs.map((log) => (
            <div key={log.id} className="view-logs-card">
              <p><strong>Date:</strong> {new Date(log.created_at).toLocaleString()}</p>
              <p><strong>Learned:</strong> {log.learned}</p>
              <p><strong>Win:</strong> {log.win}</p>
              <p><strong>Improve:</strong> {log.improve}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className='no-logs-msg'>You have no logs yet...</p>
      )}
    </div>
  );
}