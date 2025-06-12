'use client';

import { getGraphsHeader } from '../../components/pages/DataVisualizations/getGraphsHeader';
import { getMapView } from '../../components/pages/DataVisualizations/getMapView';

export default function GraphsPage() {
  return (
    <div className="graphs-page">
      {getGraphsHeader()}
      {getMapView()}
    </div>
  );
} 