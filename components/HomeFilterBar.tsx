'use client';

import FormatSection from './FormatSection';
import TagsSection from './TagsSection';
import { TestFormatGroup } from '@/lib/testFormats';

interface HomeFilterBarProps {
  formats: {
    selectedFormat: TestFormatGroup;
    onFormatSelect: (formatId: TestFormatGroup) => void;
    counts: Record<TestFormatGroup, number>;
  };
  tags: {
    tags: { id: string; name: string }[];
    selectedTag: string;
    onTagSelect: (tagId: string) => void;
  };
}

export default function HomeFilterBar({ formats, tags }: HomeFilterBarProps) {
  return (
    <div
      className="w-full bg-white border-b border-gray-200 sticky z-40 mt-2"
      style={{ top: '64px' }}
    >
      <FormatSection
        selectedFormat={formats.selectedFormat}
        onFormatSelect={formats.onFormatSelect}
        counts={formats.counts}
      />
      <TagsSection
        tags={tags.tags}
        selectedTag={tags.selectedTag}
        onTagSelect={tags.onTagSelect}
        embedded
      />
    </div>
  );
}
