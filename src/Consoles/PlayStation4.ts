import { PlayStationConsoleType, PlayStationConsole } from './PlayStationConsole';

export default class PlayStation4 extends PlayStationConsole
{
	public constructor()
	{
		super(PlayStationConsoleType.ps4, '637448297627385856');
	}

	public get assetName() : string
	{
		return 'ps4_main';
	}

	public get consoleName() : string
	{
		return 'PlayStation™4';
	}
}