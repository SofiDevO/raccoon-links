import styles from './live-status.module.css';
;

const LiveStatus = ({ className, isLiveBroadcast, ...props }) => {
  return (
    <button
      className={`${styles.online} ${isLiveBroadcast ? styles.active : ""} ${className || ""}`}
      {...props}
    />
  );
};

export default LiveStatus;