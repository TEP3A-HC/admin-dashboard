const ProgressCircle = () => {
  return (
    <div className="flex items-center justify-center gap-x-5">
      <ProgressCircle value={75}>
        <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
          75%
        </span>
      </ProgressCircle>
    </div>
  );
};

export default ProgressCircle;
