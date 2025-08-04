import React, { useState } from 'react';
import { Upload, Play, Pause, Volume2, User, FileText, Mic, Shield, CheckCircle, Clock, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const VoiceTalk = () => {
  const [uploadedFiles, setUploadedFiles] = useState<{ text: number; audio: number }>({ text: 0, audio: 0 });
  const [voiceName, setVoiceName] = useState('');
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFileUpload = (type: 'text' | 'audio') => {
    setUploadedFiles(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
    
    // Show success feedback
    const message = type === 'text' 
      ? 'Text files uploaded successfully! Our AI is analyzing your conversations.' 
      : 'Audio files uploaded successfully! Our AI is processing your voice patterns.';
    
    // You could add a toast notification here
    console.log(message);
  };

  const startTraining = () => {
    if (uploadedFiles.text > 0 || uploadedFiles.audio > 0) {
      setIsTraining(true);
      setTrainingProgress(0);

      // Enhanced training simulation with realistic steps
      const trainingSteps = [
        { progress: 20, message: 'Analyzing voice patterns...' },
        { progress: 40, message: 'Learning speech characteristics...' },
        { progress: 60, message: 'Processing emotional tones...' },
        { progress: 80, message: 'Optimizing voice model...' },
        { progress: 100, message: 'Finalizing voice clone...' }
      ];

      let currentStep = 0;
      const interval = setInterval(() => {
        setTrainingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsTraining(false);
            setIsComplete(true);
            return 100;
          }
          
          const nextProgress = Math.min(prev + 5, trainingSteps[currentStep]?.progress || 100);
          if (nextProgress >= trainingSteps[currentStep]?.progress) {
            currentStep++;
          }
          
          return nextProgress;
        });
      }, 300);
    }
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    // Simulate audio playback
    if (!isPlaying) {
      setTimeout(() => setIsPlaying(false), 3000);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-cream via-white to-deep-purple/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-deep-purple mb-6 animate-fade-up">
            Bring their voice back to life
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Upload cherished conversations and voice notes. Our AI will recreate their voice with love and precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Upload Form */}
          <div className="animate-slide-in-left">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-deep-purple mb-6 flex items-center">
                <Upload className="mr-3" size={28} />
                Create Voice Clone
              </h2>

              {/* Voice Name Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name your voice (e.g., "Maa", "Papa", "Best Friend")
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={voiceName}
                    onChange={(e) => setVoiceName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime/50 focus:border-lime transition-colors"
                    placeholder="Enter a loving name..."
                  />
                </div>
              </div>

              {/* Text Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload text conversations
                </label>
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-lime transition-colors cursor-pointer"
                  onClick={() => handleFileUpload('text')}
                  onKeyDown={(e) => e.key === 'Enter' && handleFileUpload('text')}
                  tabIndex={0}
                  role="button"
                  aria-label="Upload text conversations"
                >
                  <FileText className="mx-auto mb-3 text-gray-400" size={32} />
                  <p className="text-gray-600 mb-2">Click to upload chat exports, messages, or letters</p>
                  <p className="text-sm text-gray-500">Supports .txt, .pdf, .docx files</p>
                  {uploadedFiles.text > 0 && (
                    <div className="mt-3 flex items-center justify-center text-green-600">
                      <CheckCircle size={16} className="mr-1" />
                      <span className="text-sm">{uploadedFiles.text} file(s) uploaded</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  💡 Tip: Upload WhatsApp chats, text messages, or handwritten letters for best results
                </p>
              </div>

              {/* Audio Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload voice recordings
                </label>
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-lime transition-colors cursor-pointer"
                  onClick={() => handleFileUpload('audio')}
                  onKeyDown={(e) => e.key === 'Enter' && handleFileUpload('audio')}
                  tabIndex={0}
                  role="button"
                  aria-label="Upload voice recordings"
                >
                  <Mic className="mx-auto mb-3 text-gray-400" size={32} />
                  <p className="text-gray-600 mb-2">Click to upload voice notes, calls, or recordings</p>
                  <p className="text-sm text-gray-500">Supports .mp3, .wav, .m4a files</p>
                  {uploadedFiles.audio > 0 && (
                    <div className="mt-3 flex items-center justify-center text-green-600">
                      <CheckCircle size={16} className="mr-1" />
                      <span className="text-sm">{uploadedFiles.audio} file(s) uploaded</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  💡 Tip: Voice recordings with clear speech and emotional content work best
                </p>
              </div>

              {/* Start Training Button */}
              <button
                onClick={startTraining}
                disabled={isTraining || (uploadedFiles.text === 0 && uploadedFiles.audio === 0) || !voiceName}
                className="w-full py-4 bg-gradient-to-r from-lime to-deep-purple text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isTraining ? 'Training Your Clone...' : 'Start Voice Training'}
              </button>

              {/* Privacy Disclaimer */}
              <div className="mt-6 p-4 bg-lime/10 rounded-lg border border-lime/20">
                <div className="flex items-start space-x-3">
                  <Shield className="text-deep-purple mt-0.5" size={20} />
                  <div>
                    <p className="text-sm text-deep-purple font-semibold mb-1">
                      Your Privacy is Sacred
                    </p>
                    <p className="text-sm text-gray-600">
                      We never share or misuse your data. All voice cloning happens securely on our servers, and your memories remain completely private. 
                      Your voice data is encrypted and automatically deleted after processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info Panel */}
          <div className="animate-slide-in-right">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-deep-purple mb-6">
                Voice Clone Status
              </h3>

              {!isTraining && !isComplete && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Volume2 className="text-gray-400" size={32} />
                  </div>
                  <p className="text-gray-600">
                    Upload some files to begin creating your voice clone
                  </p>
                </div>
              )}

              {isTraining && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-lime to-deep-purple rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <Clock className="text-white" size={32} />
                    </div>
                    <h4 className="text-lg font-semibold text-deep-purple mb-2">
                      Training "{voiceName}"
                    </h4>
                    <p className="text-gray-600">
                      {trainingProgress < 20 && 'Analyzing voice patterns...'}
                      {trainingProgress >= 20 && trainingProgress < 40 && 'Learning speech characteristics...'}
                      {trainingProgress >= 40 && trainingProgress < 60 && 'Processing emotional tones...'}
                      {trainingProgress >= 60 && trainingProgress < 80 && 'Optimizing voice model...'}
                      {trainingProgress >= 80 && trainingProgress < 100 && 'Finalizing voice clone...'}
                      {trainingProgress === 100 && 'Voice clone ready!'}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Training Progress</span>
                      <span>{trainingProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-lime to-deep-purple h-3 rounded-full transition-all duration-500"
                        style={{ width: `${trainingProgress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Training Steps */}
                  <div className="space-y-3">
                    {[
                      { step: 'Analyzing voice patterns', complete: trainingProgress > 20 },
                      { step: 'Learning speech characteristics', complete: trainingProgress > 50 },
                      { step: 'Refining emotional tones', complete: trainingProgress > 80 },
                      { step: 'Finalizing voice model', complete: trainingProgress === 100 },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${
                          item.complete 
                            ? 'bg-green-500' 
                            : trainingProgress > index * 25 
                              ? 'bg-gradient-to-r from-lime to-deep-purple animate-pulse' 
                              : 'bg-gray-300'
                        }`}></div>
                        <span className={`text-sm ${item.complete ? 'text-green-600' : 'text-gray-600'}`}>
                          {item.step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isComplete && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-green-500" size={32} />
                    </div>
                    <h4 className="text-lg font-semibold text-deep-purple mb-2">
                      "{voiceName}" is Ready!
                    </h4>
                    <p className="text-gray-600">
                      Your voice clone has been successfully created. Ready to reconnect?
                    </p>
                  </div>

                  {/* Sample Playback */}
                  <div className="bg-gradient-to-r from-lime/10 to-deep-purple/10 rounded-lg p-6">
                    <h5 className="font-semibold text-deep-purple mb-3">Sample Playback</h5>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={togglePlayback}
                        className="w-12 h-12 bg-gradient-to-r from-lime to-deep-purple rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-200"
                      >
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                      </button>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">
                          "Hello beta, I'm so happy to be able to speak with you again. How are you doing today?"
                        </p>
                        {isPlaying && (
                          <div className="flex items-center space-x-1 mt-2">
                            {[...Array(8)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 bg-gradient-to-t from-lime to-deep-purple rounded-full animate-voice-wave"
                                style={{
                                  height: `${Math.random() * 20 + 10}px`,
                                  animationDelay: `${i * 0.1}s`,
                                }}
                              ></div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Start Conversation Button */}
                  <button 
                    onClick={() => {
                      // Simulate starting a conversation
                      alert(`Starting conversation with ${voiceName}...\n\nThis would open the chat interface where you can have emotional conversations with your AI voice clone.`);
                    }}
                    className="w-full py-4 bg-gradient-to-r from-lime to-deep-purple text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                  >
                    Start Conversation with {voiceName}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Home Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link
          to="/"
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-lime to-deep-purple text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Back to Home"
        >
          <Home size={24} />
        </Link>
      </div>
    </div>
  );
};

export default VoiceTalk;