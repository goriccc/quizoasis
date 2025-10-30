// MediaPipe affect estimation helpers

export type Affect = {
  valence: number; // -1..1
  arousal: number; // 0..1
  tension: number; // 0..1
};

export function computeAffectFromLandmarks(landmarks: Array<{x:number;y:number;z:number}>): Affect {
  // Simple heuristics using a few reference points (normalized image coords)
  // Landmarker uses FaceMesh topology. Use common indices as rough cues.
  // Fallback safely if missing.
  const safe = (i: number) => landmarks[i] || { x: 0, y: 0, z: 0 };

  // Mouth corners (61, 291) - wider smile => higher valence
  const leftMouth = safe(61);
  const rightMouth = safe(291);
  const mouthWidth = Math.max(0, Math.hypot(rightMouth.x - leftMouth.x, rightMouth.y - leftMouth.y));

  // Brow center vs brow inner raise (66, 296 approx) -> tension
  const leftBrowInner = safe(66);
  const rightBrowInner = safe(296);
  const browTension = Math.min(1, Math.max(0, 1 - Math.abs(leftBrowInner.y - rightBrowInner.y) * 8));

  // Eye openness (159 upper, 145 lower) left eye as cue -> arousal
  const eyeUpper = safe(159);
  const eyeLower = safe(145);
  const eyeOpen = Math.max(0, eyeLower.y - eyeUpper.y);

  const valence = Math.min(1, Math.max(-1, (mouthWidth - 0.08) * 6));
  const arousal = Math.min(1, Math.max(0, (eyeOpen - 0.01) * 20));
  const tension = Math.min(1, Math.max(0, browTension));

  return { valence, arousal, tension };
}


