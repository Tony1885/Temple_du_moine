"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
} from "recharts";
import { TimelineEvent } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import { Activity } from "lucide-react";

interface DpsTimelineChartProps {
    timeline: TimelineEvent[];
    averageDps: number;
}

function CustomTooltip({ active, payload, label }: any) {
    if (!active || !payload?.length) return null;

    const mins = Math.floor(label / 60);
    const secs = label % 60;

    return (
        <div className="rounded-xl border border-white/10 bg-void-800/95 px-4 py-3 shadow-xl backdrop-blur-xl">
            <p className="text-xs text-gray-500">
                {mins}:{secs.toString().padStart(2, "0")}
            </p>
            <p className="mt-1 font-mono text-lg font-bold text-epic-400">
                {formatNumber(payload[0].value)} DPS
            </p>
        </div>
    );
}

export function DpsTimelineChart({
    timeline,
    averageDps,
}: DpsTimelineChartProps) {
    const data = timeline.map((event) => ({
        time: event.timestamp,
        dps: event.dps,
        label: `${Math.floor(event.timestamp / 60)}:${(event.timestamp % 60)
            .toString()
            .padStart(2, "0")}`,
    }));

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card overflow-hidden"
        >
            <div className="flex items-center gap-3 border-b border-white/5 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-epic-500/10 ring-1 ring-epic-500/20">
                    <Activity className="h-5 w-5 text-epic-400" />
                </div>
                <div>
                    <h3 className="font-display text-base font-bold text-white">
                        Timeline DPS
                    </h3>
                    <p className="text-xs text-gray-500">
                        Performance au fil du combat
                    </p>
                </div>
            </div>

            <div className="p-4">
                <ResponsiveContainer width="100%" height={280}>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="dpsGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                <stop offset="50%" stopColor="#8b5cf6" stopOpacity={0.1} />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="rgba(255,255,255,0.03)"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="time"
                            tickFormatter={(t) =>
                                `${Math.floor(t / 60)}:${(t % 60)
                                    .toString()
                                    .padStart(2, "0")}`
                            }
                            stroke="rgba(255,255,255,0.1)"
                            tick={{ fill: "#64748b", fontSize: 11 }}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            tickFormatter={(v) => formatNumber(v)}
                            stroke="rgba(255,255,255,0.1)"
                            tick={{ fill: "#64748b", fontSize: 11 }}
                            tickLine={false}
                            axisLine={false}
                            width={60}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <ReferenceLine
                            y={averageDps}
                            stroke="#fbbf24"
                            strokeDasharray="4 4"
                            strokeOpacity={0.5}
                            label={{
                                value: `Avg: ${formatNumber(averageDps)}`,
                                fill: "#fbbf24",
                                fontSize: 11,
                                position: "right",
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="dps"
                            stroke="#8b5cf6"
                            strokeWidth={2}
                            fill="url(#dpsGradient)"
                            dot={false}
                            activeDot={{
                                r: 4,
                                fill: "#8b5cf6",
                                stroke: "#fff",
                                strokeWidth: 2,
                            }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
